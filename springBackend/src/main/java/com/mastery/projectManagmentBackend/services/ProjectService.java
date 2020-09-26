package com.mastery.projectManagmentBackend.services;

import com.mastery.projectManagmentBackend.domain.Project;
import com.mastery.projectManagmentBackend.exceptions.ProjectIdentifierException;
import com.mastery.projectManagmentBackend.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdate(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e){
            throw new ProjectIdentifierException("project identifier '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }

    }

    public Project findProjectByIdentifier(String projectIdentifier){
        Project project = projectRepository.findByProjectIdentifier(projectIdentifier.toUpperCase());
        if (project==null){
            throw new ProjectIdentifierException("project identifier '" + projectIdentifier.toUpperCase() + "' does not exist");

        }
        else return project;

    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteByProjectIdentifier(String projectIdentifier){
        Project project = projectRepository.findByProjectIdentifier(projectIdentifier.toUpperCase());
        if(project == null){
            throw new ProjectIdentifierException("project '"+projectIdentifier + "' does not exist");
        }
        projectRepository.delete(project);
    }
}
