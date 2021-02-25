import './Entete.scss'
import avatar from '../images/avatar.png';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Ludovick Lubérisse <img src={avatar} alt="Ludovick Lubérisse" /></div>
    </header>
  );
}