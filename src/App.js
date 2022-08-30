import './App.css';
import './styled.ts'
import * as S from './styled.ts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <S.main_ui>
          <S.list src="list.png" />
          <S.logo src="YT_logo.png" />
          <S.searchbox>
            <S.searchinput type="CardText" placeholder="검색" />
            <S.searchbtn src="search.jpg" />
          </S.searchbox>
          <S.usermenu>
            <S.make src="make.png" />
            <S.menu src="menu.png" />
            <S.alarm src="alarm.png" />
            <S.icon src="icon.jpg" />
          </S.usermenu>
        </S.main_ui>
        <S.sub_ui>
          <S.filterbtn>전체</S.filterbtn>
          <S.filterbtn>믹스</S.filterbtn>
          <S.filterbtn>음악</S.filterbtn>
          <S.filterbtn>게임</S.filterbtn>
          <S.filterbtn>만화 영화</S.filterbtn>
          <S.filterbtn>실시간</S.filterbtn>
          <S.filterbtn>요리 프로그램</S.filterbtn>
          <S.filterbtn>액션 어드벤쳐 게임</S.filterbtn>
          <S.filterbtn>요리</S.filterbtn>
          <S.filterbtn>최근에 업로드된 동영상</S.filterbtn>
          <S.filterbtn>감상한 동영상</S.filterbtn>
          <S.filterbtn>새로운 맞춤 동영상</S.filterbtn>
        </S.sub_ui>
      </header>
    </div>
  );
}

export default App;
