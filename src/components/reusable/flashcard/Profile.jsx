import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../../supabaseClient'; 

export default function Profile() {
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        setEmail(user.email);
        
        let nameToSet = '';

        if (user.user_metadata?.full_name) {
          nameToSet = user.user_metadata.full_name;
        } else if (user.user_metadata?.name) {
          nameToSet = user.user_metadata.name;
        }

      
        const { data } = await supabase
          .from('profiles')
          .select('avatar_url, full_name')
          .eq('id', user.id)
          .maybeSingle();
          
        if (data) {
          if (data.avatar_url) setAvatarUrl(data.avatar_url);
          if (data.full_name) nameToSet = data.full_name;
        }

        if (!nameToSet && user.email) {
          nameToSet = user.email.split('@')[0];
        }

        setFullName(nameToSet);
      }
    };
    fetchUser();
  }, []);

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file || !userId) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${userId}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
      
      const publicUrl = urlData.publicUrl;
      setAvatarUrl(publicUrl);

      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({ id: userId, avatar_url: publicUrl });

      if (updateError) throw updateError;
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Error signing out: ' + error.message);
    } else {
      window.location.href = '/'; 
    }
  };

  if (!userId) return null;

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
      
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ 
          background: 'none', border: 'none', padding: '0', cursor: 'pointer',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 0 2px #fff, 0 0 0 4px #4285F4',
          width: '36px', height: '36px', overflow: 'hidden'
        }}
      >
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt="Profile" 
            style={{ width: '36px', height: '36px', minWidth: '36px', minHeight: '36px', borderRadius: '50%', objectFit: 'cover', display: 'block' }} 
          />
        ) : (
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#5f6368', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'bold' }}>
            {fullName ? fullName[0].toUpperCase() : (email ? email[0].toUpperCase() : 'U')}
          </div>
        )}
      </button>

      {isMenuOpen && (
        <div style={{
          position: 'absolute', bottom: '50px', left: '0px', width: '220px',
          backgroundColor: '#303134', color: '#e8eaed', borderRadius: '8px',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.4)', padding: '15px', zIndex: 1000,
          textAlign: 'center', fontFamily: 'sans-serif'
        }}>
        
          <p style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
            {fullName || 'User'}
          </p>
          <p style={{ margin: '0 0 12px 0', fontSize: '11px', color: '#aaa', wordBreak: 'break-all' }}>{email}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ 
              display: 'block', padding: '6px 12px', backgroundColor: '#3c4043', 
              border: '1px solid #5f6368', borderRadius: '4px', fontSize: '12px', 
              cursor: 'pointer', color: '#8ab4f8', fontWeight: '500', textAlign: 'center'
            }}>
              {uploading ? 'Uploading...' : 'Update Photo'}
              <input type="file" accept="image/*" onChange={uploadAvatar} disabled={uploading} style={{ display: 'none' }} />
            </label>

            <button 
              onClick={handleSignOut}
              style={{ 
                width: '100%', padding: '6px 12px', backgroundColor: 'transparent', 
                border: '1px solid #5f6368', borderRadius: '4px', fontSize: '12px', 
                cursor: 'pointer', color: '#f28b82', fontWeight: '500'
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}