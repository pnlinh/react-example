import axios from 'axios'
class Data {
    static fetchUser(){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve([{
                    login: 'thetai91',
                    name: 'Nguyen The Tai',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/6089053'
                },{
                    login: 'rualatngua',
                    name: 'Khánh Trần',
                    avatar_url: 'https://avatars2.githubusercontent.com/u/249493'
                }, {
                    login: 'ngmng204',
                    name: 'ngmng204',
                    avatar_url: 'https://avatars2.githubusercontent.com/u/2491934'
                }, {
                    login: 'ngtrieuvi92',
                    name: 'Vi Nguyen',
                    avatar_url: 'https://avatars1.githubusercontent.com/u/2744317'
                }, {
                    login: 'daitr-gu',
                    name: 'daitr-gu',
                    avatar_url: 'https://avatars1.githubusercontent.com/u/9055707'
                }])
            }, 200)
        })
    }
    static fetchUserInformation(username){
        return axios.get('https://api.github.com/users/' + username, {
            accesstoken : '1fa0d77fc09b477a9c5e29eb32651a035015070f'
        })
    }
}

export default Data
