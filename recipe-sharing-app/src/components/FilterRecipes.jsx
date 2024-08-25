const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    setSearchTerm: (term) =>
      set((state) => {
        const filtered = state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase())
        );
        return { searchTerm: term, filteredRecipes: filtered };
      }),
    // Other actions remain unchanged...
  }));
  