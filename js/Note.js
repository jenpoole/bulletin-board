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
               <textarea defaultValue={this.props.children} className="form-control"></textarea>
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

React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));