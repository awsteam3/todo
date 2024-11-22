import logo from "./logo.svg";

// 以下が認証機能のためのインポート文
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
　　　// サインアウトボタンの追加
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

// withAuthenticatorコンポーネントを利用
export default withAuthenticator(App);