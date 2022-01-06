import { data, user, friends, transactions } from '../../data';
import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from '../../componenrs';

export const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
