function sendHttpRequest(method, url, data){
    return fetch(url,{
        method: method,
        body: data
    }).then((responseData: Response)=>{
        if(responseData.status>=200 && responseData.status<300){
            return responseData.json();
        }
        else{
            responseData.json();
            throw new Error('Something went wrong -server side!!');
        }
    }).catch(error=>{
        console.log(error);
        throw new Error('Something went wrong -server side!!');
    })
}

