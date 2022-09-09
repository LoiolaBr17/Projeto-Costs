function ProjectForm(){
    return (
        <form>
            <input type="text" placeholder="Insira o nome do projeto" /> <br />
            <input type="number" placeholder="Insira o orçamento total" /> <br />
            <select name="category_id">
                <option disabled selected>Selecione a categoria</option>
            </select> <br />
            <input type="submit" value="Criar Projeto" />
        </form>
    )
}

export default ProjectForm