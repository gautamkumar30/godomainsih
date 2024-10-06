import axios from 'axios';

function WebsiteInput() {
  const [website, setWebsite] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [predictedWebsite, setPredictedWebsite] = useState('');

  const handleInputChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/website', { website })
      .then((response) => {
        if (response.data.valid) {
          setIsValid(true);
        } else {
          setPredictedWebsite(response.data.predicted_website);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={website} onChange={handleInputChange} />
      <button type="submit">Submit</button>
      {isValid ? (
        <p>Valid website: {website}</p>
      ) : (
        <p>Predicted website: {predictedWebsite}</p>
      )}
    </form>
  );
}

export default WebsiteInput;
