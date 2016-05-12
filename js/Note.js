var Note = React.createClass({
    // when app loads, default state of the note is set to display, not edit
    getInitialState: function() {
        return {editing: false}
    },
    // edit note
    edit: function() {
        this.setState({editing: true});
    },
    // save note
    save: function() {
        var val = this.refs.newText.getDOMNode().value;
        alert("Save note value: " + val);
        this.setState({editing: false});
    },
    // delete note
    remove: function() {
        alert('removing note');
    },
    // show note contents
    renderDisplay: function() {
        return( // Create note div
        <div className="note">
            <p>{this.props.children}</p>
            <span>
                <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
                <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
            </span>
        </div>
        );
    },
    // show form to edit note
    renderForm: function() {
       return(
           <div className="note">
               <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
               <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
           </div>
           )
    },
    // show edit form or display note on page
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }    
});


// Create board for notes
var Board = React.createClass({
    // validate number of notes on board
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100){
                return new Error("Creating " + props[propName] + " notes is excessive!");
            }
        }
    },
    // make Board a parent component of notes 
    getInitialState: function() {
        return {
            notes: [
                'call bill',
                'email lisa',
                'bake a cake'
            ]
        };
    },
    // populate notes & their contents to board
    render: function() {
        return (<div className="board">
            {this.state.notes.map(function(note, i){
                return (
                    <Note key={i}>{note}</Note>
                );
            })}
        </div>);
    }
});

// render board with 10 notes
React.render(<Board count={10}/>, 
    document.getElementById('react-container'));