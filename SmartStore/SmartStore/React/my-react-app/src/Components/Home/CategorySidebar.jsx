const CategorySidebar = () => {
    
    const categories = ["Wszystkie", "Smartfony", "Laptopy", "Zegarki", "Audio", "Akcesoria", "Gaming", "Aparaty", "AGD", "Dom inteligentny"];

    return (
        <aside className="category-sidebar">
            <h3 className="sidebar-heading">Kategorie</h3>
            <nav className="sidebar-nav">
                {categories.map((cat, index) => (
                    <button key={index} className="sidebar-link">
                        {cat}
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default CategorySidebar;