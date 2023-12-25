import axios from 'axios';


export const getFile = async(fileKey) => {

    const token = localStorage.getItem('token'); // Get the token from local storage

    const url = `https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/file_managment?download=&key=${fileKey}&bucket=xtractor-main`;
    console.log(url);
    const config = {
        headers: {
            'Authorization': `${token}`
        }
    };

    try {
        const response = await axios.get(url, config);

        return response.data.urls[0];
    } catch (error) {
        console.error(error);
    }


}
export const createFolder = () => {
    const url = 'https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/user_management/create_user';

    const token = localStorage.getItem('token'); // Get the token from local storage

    const config = {
        headers: { 
            'Authorization': `${token}` 
        }
    };

    axios.post(url, {}, config)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}