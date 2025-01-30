import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo, useState } from "react";
import { NoteType } from "../Notes/typings";

const defaultNotes: Array<NoteType> = [
    { id: "1", content: "1 Lorem Ipsum" },
    { id: "2", content: "2 Lorem Ipsum" },
    { id: "3", content: "3 Lorem Ipsum" },
];

type NoteContextType = {
    notes: Array<NoteType>;
    updateNotes: Dispatch<SetStateAction<Array<NoteType>>>;
    selectedNote: NoteType;
    updateSelectedNote: Dispatch<SetStateAction<NoteType>>;
}

export const NoteContext = createContext<NoteContextType>({ 
    notes: [], updateNotes: () => {}, selectedNote: defaultNotes[0], updateSelectedNote: () => {} 
});

export const NoteProvider = ({ children }: { children: ReactNode }) => {
    const [notes, setNotes] = useState(defaultNotes);
    const [selectedNote, setSelectedNote] = useState(defaultNotes[0]);

    const updateNotes = useCallback((notes: Array<NoteType>) => {
        setNotes(notes);
    }, []);

    const updateSelectedNote = useCallback((note: NoteType) => {
        setSelectedNote(note);
    }, []);

    const contextValue = useMemo(() => ({ notes, updateNotes, selectedNote, updateSelectedNote }), [notes, updateNotes, selectedNote, updateSelectedNote]);

    // @ts-ignore
    return <NoteContext.Provider value={contextValue}>
        {children}
    </NoteContext.Provider>
}

export const useNotes = () => useContext<NoteContextType>(NoteContext);