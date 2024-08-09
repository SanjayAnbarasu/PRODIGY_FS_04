import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chatfeed';
import LoginForm  from './components/LoginForm';
import './app.css';

//const projectID = '2a5b502c-c8de-4e23-9f40-870fa598a02c';

const App = () => {
if (!localStorage.getItem('username')) return <LoginForm/>;

  return (
    <ChatEngine
      height="100vh"
      projectID="2a5b502c-c8de-4e23-9f40-870fa598a02c"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

// infinite scroll, logout, more customizations...

export default App;