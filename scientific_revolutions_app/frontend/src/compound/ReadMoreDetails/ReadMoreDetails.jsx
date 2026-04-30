import { useEffect,useState } from "react"
import FatchMoreDetails from "../FatchMoreDetails/FatchMoreDetails"
import { useParams } from "react-router-dom";

const ReadMoreDetails = () => {
  const [readMoreData, setReadMoreData] = useState(null);

  const { id } = useParams();
    
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/majiarnab997-collab/69a9bb0530c1f860a5a04c73f5c6d8f3/raw/843cda92ea8a42adefa1fa3573de7dbe399fe6b7/the_knowledge_Loop.json'
      );
          
      const jsonData = await response.json();
      const Data = jsonData.data;

      const formatedData = Data.find(
        (item) => item.id === parseInt(id)
      );

      setReadMoreData(formatedData);
    };

    fetchData();
  }, [id]);

  return(
    <>
      {readMoreData && (
        <FatchMoreDetails
          key={readMoreData.id}
          id={readMoreData.id}
          details={readMoreData}
        />
      )}
    </>
  )
}

export default ReadMoreDetails