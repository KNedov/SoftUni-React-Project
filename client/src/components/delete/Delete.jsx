import { useNavigate, useParams } from "react-router-dom";
import useRequest from "../../hooks/userRequest";
import { useState, useEffect } from "react";
import './Delete.css';

export default function Delete() {
    const navigate = useNavigate();
    const { productId: phoneId } = useParams();
    const { request } = useRequest();

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    const closeModal = () => setIsModalOpen(!isModalOpen);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await request(`/phones/${phoneId}`, 'DELETE');
            navigate('/my-products');
        } catch (err) {
            alert(err.message);
        } finally {
            setIsDeleting(false);
        }
    };

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Confirm Delete</h2>
                        <p>Are you sure you want to delete this phone?</p>
                        <div className="modal-actions">
                            <button
                                onClick={handleDelete}
                                className="confirm-btn"
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Yes, Delete'}
                            </button>
                            <button onClick={closeModal} className="cancel-btn">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
