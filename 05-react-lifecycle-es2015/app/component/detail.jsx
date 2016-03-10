import React, {Component} from 'react'
import { Link } from 'react-router'
import Loading from './loading.jsx'
import Data from '../utils/data'
import  ImageUser from './imageuser.jsx'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : true,
            message: false,
            userInformation: {}
        }
    }
    componentDidMount(){
        var username = this.props.params.username;
        Data.fetchUserInformation(username).then((response) => {
            this.setState({
                isLoading: false,
                userInformation: response.data
            })
        }).catch((response) => {
            if (response){
                this.setState({
                    isLoading: false,
                    message: response.data.message
                });
            }

        });
    }
    render(){
        if (this.state.isLoading){
            return <Loading />
        }
        if (this.state.message){
            return (
                <div>
                    <h3> {this.state.message} </h3>
                    <Link to="/" > Back to Home </Link>
                </div>
            )
        }
        return (
            <div>
                <h1>Profile page: {this.props.params.username}</h1>
                <ImageUser user={this.state.userInformation} />
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                {this.state.userInformation.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Company
                            </td>
                            <td>
                                {this.state.userInformation.company}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Github link
                            </td>
                            <td>
                                {this.state.userInformation.html_url}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Following
                            </td>
                            <td>
                                {this.state.userInformation.following}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Followers
                            </td>
                            <td>
                                {this.state.userInformation.followers}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/" > Back to Home </Link>
            </div>
        )
    }
}

export default Detail