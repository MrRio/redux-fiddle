import { ADD_NOTE, SET_NOTES } from "../constants";

export const addNote = note => ({
    type: ADD_NOTE,
    note
});

export const setNotes = notes => ({
    type: SET_NOTES,
    notes
});
