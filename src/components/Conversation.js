import React,{useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components'
import { SearcContainer, SearchInput } from './ContactList';
import { messagesList } from './MockData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 12;
  background: #f6f7f8
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 32px; 
  height: 32px;
  border-radius:50%
`;
const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  buttom: 0;
`
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.5;
  cursor: pointer;
`
const MessageContainer = styled.div`
  display: flex;
  background: #e5ddd6;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${props => props.isYours ? 'flex-end' : 'flex-start'};
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${props => props.isYours ? '#daf8cb' : 'white'};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 5px; 
`;
const Conversation = (props) => {
  const {selectedChat} = props;
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState(messagesList);
  
  const onEnterPress = (e) => {
    if(e.key === "Enter"){
      const messages = [...messageList];
      messages.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "12:00 PM",
      })
      setMessageList(messages);
      setText("");
    }
  }
  // const [emojiVisible, setEmojiVisible] = useState(false);
  // const onEmojiClick = (event, emojiObj) => {
  //   setText(text+emojiObj.emoji);
  //   setEmojiVisible(false);
  // }
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic}/>
        {selectedChat.name}
      </ProfileHeader>
        <MessageContainer>
          {
            messageList.map((messageData) => (
              <MessageDiv isYours={messageData.senderID === 0}>
                <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
             </MessageDiv>
            ))
          }    
        </MessageContainer>
      <ChatBox>
        <SearcContainer>
          {/* {emojiVisible && (<EmojiPicker 
            EmojiPickerStyle = {{position: "absolute, bottom: 60px"}}
            onEmojiClick={onEmojiClick}
          />)} */}
            <EmojiImage src='/public/data.svg'/>
            <SearchInput placeholder='Type a message'
              value={text} 
              onKeyDown={onEnterPress}
              onChange={(e) => 
              setText(e.target.value)}
             />
        </SearcContainer>
      </ChatBox>
    </Container>
  )
}

export default Conversation
