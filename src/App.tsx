import { MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const projectId: string = '90937f25-e701-4efb-b1f7-493e2815cf0f';
const user: string = 'Mehedi';
const secret: string = '123456';

function App() {
  const chatProps = useMultiChatLogic(projectId, user, secret)
  return (
    <div>
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    </div>
  );
}

export default App;
