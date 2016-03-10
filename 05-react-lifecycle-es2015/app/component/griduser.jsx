import React, {Component} from 'react'
import Loading from './loading.jsx'
import { Link } from 'react-router'
import Data from '../utils/data'
import ImageUser from './imageuser.jsx'

class GridUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            listUser: []
        }
    }
    componentDidMount(){
        Data.fetchUser().then((data) => {
            this.setState({
                isLoading: false,
                listUser: data
            })
        })
    }
    render(){
        if (this.state.isLoading){
            return  <Loading />
        }
        var listUser = this.state.listUser.map((el) =><ImageUser key={el.name} user={el} />);
        return (
            <div className="row">
                {listUser}
            </div>
        )
    }
}

export default GridUser