import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile
        image='https://plus.unsplash.com/premium_photo-1672281090684-06f42ed9827f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80'
        name='James Kim'
        title='Frontend Engineer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1674644949503-b77f20451871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80'
        name='Anna Young'
        title='Frontend Engineer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1674594430972-c3b9e6589e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        name='Bob Yu'
        title='Backend Engineer'
      />
    </>
  );
}

export default AppProfile;
