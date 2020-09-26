package com.mastery.projectManagmentBackend.repositories;

import com.mastery.projectManagmentBackend.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    public Project findByProjectIdentifier(String projectIdentifier);

    @Override
    Iterable<Project> findAll();
}
