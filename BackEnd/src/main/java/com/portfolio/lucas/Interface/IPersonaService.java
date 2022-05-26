/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.lucas.Interface;

import com.portfolio.lucas.Entity.Persona;
import java.util.List;

/**
 *
 * @author lucas
 */
public interface IPersonaService {
    
    //Traer lista personas
    public List<Persona> getPersonas();
    
    //Guardar persona
    public void savePersona(Persona persona);
    
    //Eliminar persona
    public void deletePersona(Long id);
    
    //Buscar persona
    public Persona findPersona(Long id);
}
