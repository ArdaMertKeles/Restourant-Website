import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../../redux/orderSlice";

const NoteInputOrButton = () => {
    const dispatch = useDispatch();
    const note = useSelector((state) => state.order.note);
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (note.length > 0) {
            setEditing(true);
        } else {
            setEditing(false);
        }
    }, [note]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                if (note.trim() === "") {
                    setEditing(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [note]);

    return (
        <div className="note-section">
            {editing ? (
                <div className="input-section">
                    <p>Add Order Notes</p>
                    <input
                        ref={inputRef}
                        type="text"
                        value={note}
                        onChange={(e) => dispatch(setNote(e.target.value))}
                        placeholder="e.g., Please call upon arrival"
                        className="note-input"
                    />
                </div>
            ) : (
                <button className="note-button" onClick={() => setEditing(true)}>
                    Add Order Notes
                </button>
            )}
        </div>
    );
};

export default NoteInputOrButton;
