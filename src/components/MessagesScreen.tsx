
import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Bot, Send, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface MessagesScreenProps {
  onBack: () => void;
}

const MessagesScreen = ({ onBack }: MessagesScreenProps) => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Alex Thompson",
      type: "student",
      lastMessage: "Thank you for considering my application. I'd love to discuss the research project further.",
      time: "2 hours ago",
      unread: 2,
      avatar: "AT",
      status: "applicant"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      type: "expert",
      lastMessage: "The NSF grant deadline is approaching. Should we schedule a call?",
      time: "1 day ago",
      unread: 0,
      avatar: "SJ",
      status: "collaborator"
    },
    {
      id: 3,
      name: "Maria Garcia",
      type: "student",
      lastMessage: "I have experience with the latest TensorFlow updates you mentioned.",
      time: "2 days ago",
      unread: 1,
      avatar: "MG",
      status: "applicant"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Alex Thompson",
      content: "Hello Professor Chen! I'm very interested in your AI research position. I have extensive experience with machine learning and have completed several projects in computer vision.",
      time: "Yesterday 3:45 PM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      content: "Hi Alex, thanks for your interest. I reviewed your profile and I'm impressed with your background. Could you tell me more about your computer vision projects?",
      time: "Yesterday 4:20 PM",
      isMe: true
    },
    {
      id: 3,
      sender: "Alex Thompson",
      content: "Thank you for considering my application. I'd love to discuss the research project further. I've worked on object detection using YOLO and CNN architectures, and recently completed a project on facial recognition systems.",
      time: "2 hours ago",
      isMe: false
    }
  ];

  const suggestedReplies = [
    "That sounds very relevant to our research. When would you be available for a brief call?",
    "Could you share more details about your facial recognition project?",
    "I'd like to schedule an interview. Are you available this week?"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Messages</h1>
        </div>
      </div>

      {selectedChat === null ? (
        // Conversations List
        <div className="flex-1 p-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 rounded-xl"
            />
          </div>

          {/* Conversations */}
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      conversation.type === 'student' ? 'bg-blue-500' : 'bg-green-500'
                    }`}>
                      {conversation.avatar}
                    </div>
                    {conversation.unread > 0 && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{conversation.lastMessage}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          conversation.status === 'applicant' ? 'border-blue-200 text-blue-700' : 
                          'border-green-200 text-green-700'
                        }`}
                      >
                        {conversation.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Chat View
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b p-4">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedChat(null)}
                className="p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                AT
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Alex Thompson</h3>
                <p className="text-sm text-gray-600">Student • UC Berkeley</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl p-3 ${
                  message.isMe 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white shadow-sm'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.isMe ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Suggested Replies */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Bot className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">AI Suggested Replies</span>
            </div>
            <div className="space-y-2">
              {suggestedReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setNewMessage(reply)}
                  className="w-full text-left justify-start rounded-xl text-sm h-auto py-2"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-xl"
                onKeyPress={(e) => e.key === 'Enter' && setNewMessage('')}
              />
              <Button 
                onClick={() => setNewMessage('')}
                className="rounded-xl px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesScreen;
