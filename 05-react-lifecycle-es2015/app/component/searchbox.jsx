import React, {Component} from 'react'

class SearchBox extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-6">
                <input type="text"
                       className="form-control float-right"
                       placeholder={this.props.placeHolder}
                       value={this.props.searchValue}
                       onChange={this.props.onUpdateText}
                       onKeyDown={this.props.onCheckEnter}
                />
            </div>
        )
    }
}

SearchBox.defaultProps =  {
    placeHolder : 'Enter GitHub name'
}

export default SearchBox;