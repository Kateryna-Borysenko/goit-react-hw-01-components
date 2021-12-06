import Profile from 'components/Profile/Profile';
import user from 'data/user.json';

//основной компонент куда внутрь подключаются все остольные компоненты
const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default App;
