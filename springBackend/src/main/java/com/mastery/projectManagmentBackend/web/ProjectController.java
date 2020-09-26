package com.mastery.projectManagmentBackend.web;

import com.mastery.projectManagmentBackend.domain.Project;
import com.mastery.projectManagmentBackend.services.MapErrorService;
import com.mastery.projectManagmentBackend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    @Autowired
    private MapErrorService mapErrorService;

    @PostMapping("")
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult result){
       ResponseEntity<?> mapError = mapErrorService.mapError(result);
        if (mapError!=null) return mapError;
        Project newProject = projectService.saveOrUpdate(project);

        return new ResponseEntity<Project>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectIdentifier}")
    public ResponseEntity<?> findProjectByIdentifier(@PathVariable(value = "projectIdentifier") String projectIdentifier){
        Project project = projectService.findProjectByIdentifier(projectIdentifier);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> findAllProjects(){
        return projectService.findAllProjects();
    }

    @DeleteMapping("/{projectIdentifier}")
    public ResponseEntity<?> deleteByIdentifier(@PathVariable(name = "projectIdentifier") String projectIdentifier){
        projectService.deleteByProjectIdentifier(projectIdentifier);

        return new ResponseEntity<String>("project '"+projectIdentifier + "' has been deleted", HttpStatus.OK);
    }
}
