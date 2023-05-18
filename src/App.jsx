import React,{useState} from "react";

import { StreamChat } from "stream-chat";
// Stream chat is module which helps in realtime messaging , auth, user managment

import { Chat } from "stream-chat-react";
//{} -> like this type of import is basically importing specific functions or exports 

import Cookies from "universal-cookie";
//above type of import is used to import default exports  
//cookies are used to store user information

// all components import
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";
//style sheet
import 'stream-chat-react/dist/css/index.css';
import './App.css'
//in the css used is BEM CSS -> Block element modifier  css classname contains three parts ->
// 1) Block -> its main component like sidebar,navbar etc
// 2) Element-> its like small component in the main component -> button
// 3)Modifier -> its used to set property such as disable ex:- header__button__disabled
const cookies = new Cookies();
const apiKey = "fccbdngp7czn";
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);

if(authToken) {
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if(!authToken) return <Auth/>
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
      <ChannelListContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
      </Chat>
    </div>
  );
};

export default App;
