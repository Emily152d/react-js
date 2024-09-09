import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);  
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const newDoc = doc(db, "item", id);
                const docSnap = await getDoc(newDoc);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProduct({ id: docSnap.id, ...data });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {loading ? <Spinner /> : product ? <ItemDetail product={product} /> : <p>Product not found</p>}
        </div>
    );
};

export default ItemDetailContainer;
