import React from 'react';
import { MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

interface Props {
  people: Person[];
}

const List: React.FC<Props> = (props) => {
  const { people } = props;

  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <MDBCardImage
                  style={{ width: '150px', height: '150px', borderRadius: '10px' }}
                  src={image}
                  alt='Generic placeholder image'
                  fluid />
              </div>
              <div className="flex-grow-1 ms-3">
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>{age} year old</MDBCardText>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{ backgroundColor: '#efefef' }}>
                  <div>
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </article>
        );
      })}
    </div>
  );
};

export default List;
