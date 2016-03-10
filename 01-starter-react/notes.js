/**
 * Created by thinhvoxuan on 3/10/16.
 */

$('button#hight-light').click(function(){
    $(this).toogleClass('hightligh')
    $(this).text() === 'Add Hightlight' ?
        $(this).text('Remove Hightligth') :
        $(this).text('Add Hightlight');
})

var BtnHL = React.createClass({
    render(){
        <button onClick={this.props.onClick}>
            {this.props.text}
        </button>
    }
})

var HightlighContainer = React.createClass({
    getInitialState: function(){
        return {
            isHightLigh: false;
    }
    },
    updateHightligh: function(){
        this.setState({
            isHightLigh: !this.state.isHightLigh
        });
    },
    render: function(){
        var text = this.state.isHightLigh ?
            'Add Hightligh' :
            'Remove Hightligth';
        return (
            <div>
                <BtnHL text={text}
                       onClick={this.updateHightligh} />
            </div>
        )
    }
})