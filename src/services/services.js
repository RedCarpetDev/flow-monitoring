import http from "../http-common";

class TutorialDataService {

    /*getAllProducts() {
        return http.get("/INVENTORY-SERVICE/all");
    }*/
    getAllProducts() {
       return fetch("http://localhost:8082/all", {
            method: "GET",
            headers: {"Content-Type": "application/json",
                "Authorization": 'Bearer ' +localStorage.getItem("access-token")
            }
        })
        // this.props.history.push('/all');

    }
    login(loginRequest) {
        console.log(loginRequest)
            const formData= new FormData();
        for (let k in loginRequest){
            formData.append(k, loginRequest[k]);
        }
        const request = (options) => {
            const headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            })
            return fetch(options.url, options)
                .then(response =>
                    response.json().then(json => {
                        if(!response.ok) {
                            return Promise.reject(json);
                        }
                        return json;
                    })
                );
        };
        return request({
            url: "http://localhost:8087/login",
            method: 'POST',
            body: formData
        });
    }

}

export default new TutorialDataService();
