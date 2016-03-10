import React, {Component} from 'react'
import Header from './header.jsx'
import Loading from './loading.jsx'
import SearchBox from './searchbox.jsx'
import GridUser from './griduser.jsx'
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: ''
        }
    }
    handlerSearchTextChange(ev){
        this.setState({
            searchValue: ev.target.value
        })
    }
    handlerCheckEnter(ev){
        var ENTER_CODE = 13;
        if (ev.keyCode == ENTER_CODE){
            this.context.router.push("/user/" + this.state.searchValue)
        }
    }
    render(){
        return (
            <div>
                <SearchBox  onCheckEnter={ (ev) => this.handlerCheckEnter(ev) }
                            onUpdateText={(ev) => this.handlerSearchTextChange(ev)}
                            searchValue={this.state.searchValue} />
                <GridUser />
            </div>
        )
    }
}

Home.contextTypes = {
    router : React.PropTypes.object.isRequired
}


export default Home