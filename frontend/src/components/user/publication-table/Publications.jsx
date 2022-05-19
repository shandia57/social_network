import { useState, useEffect } from "react";

// Components
import SimpleButton from "../../custom/button/simpleButton/SimpleButton";
import ModalPublications from "../../modal/user/publications/ModalPublication";
import RowPublication from "../rowPublication/RowPublication";

const Publications = (props) => {
  return (
    <div className="tile pb-5">
      <div className="tile-header">
        <h3>Historique des publications</h3>
        <SimpleButton
          navigate="/user/publication"
          text="Ajouter une publication"
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th className="app-principal-color">Titre</th>
              <th className="app-principal-color">Date de publication</th>
              <th className="app-principal-color">Nombre de like</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.publications !== undefined
              ? props.publications.map((publication) => (
                  <RowPublication
                    key={publication.id}
                    title={publication.title}
                    published={publication.published}
                    liked={publication.likes}
                    id={publication.id}
                  />
                ))
              : null}
          </tbody>
        </table>
        {props.publications !== undefined ? (
          props.publications.length === 0 ? (
            <div className="table-error-length">
              Vous n'avez aucune publications
            </div>
          ) : null
        ) : null}
      </div>
      <hr />
    </div>
  );
};

export default Publications;
