import './Dossier.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
        <SortIcon className="deplacer">Déplacer</SortIcon>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info" style={{backgroundColor: couleur}}>
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <MoreVertIcon className="modifier">Modifier</MoreVertIcon>
    </article>
  );
}