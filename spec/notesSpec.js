var notesSpec = {
  createNotesObject: function(){
    var notes = new Notes();
    assert.isEqual(notes.getList()[0], undefined);
  },

  addNewNote: function() {
    var notes = new Notes();
    notes.add("My Ryan Gosling nail clipping collection. I need his left little toe to complete!!");
    assert.includes(notes.getList(), "My Ryan Gosling nail clipping collection. I need his left little toe to complete!!");
  },

  errorIfTextAreaEmpty: function() {
    var notes = new Notes();
    var assertion = function() {
      notes.add("")
    };
    assert.throwsError(assertion);
  }

};

runner.runTests(notesSpec);
