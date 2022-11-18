import api from "../Common/api";

const getEspecialidades = () => api.get("/especialidades/");
const getProfissionais = () => api.get("/profissionais/");
//const updatePersons = (id, payload) => api.put("/simplePersons/" + id, payload);
//const addPersons = (payload) => api.post("/simplePersons/", payload);
//const deletePersons = (id) => api.delete("/simplePersons/" + id);

const exportedObject = {
  getEspecialidades,
  getProfissionais,
 
};
export default exportedObject;
