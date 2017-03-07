/*

Users
Workspace
  |- Users
  |- Folders -> Tasks -> Tagged
  |- Tags

*/

CREATE TABLE TeamWorkspaces (
    WorkspaceId     INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Name            VARCHAR(128),
    Owner           VARCHAR(64) NOT NULL,
    FolderId        INT NOT NULL
)

CREATE TABLE Users (
    UserId          VARCHAR(64) NOT NULL,
    LoginProvider   VARCHAR(36),
    LoginId         VARCHAR(128)
)

CREATE TABLE Folders (
    FolderId        INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    ParentId        INT,
    Name            VARCHAR(128)
) 

-- Folder metadata
CREATE TABLE FolderData (
    FolderId        INT NOT NULL, 
    Data            NVARCHAR(max)
)

-- Task
CREATE TABLE Tasks (
    FolderId        INT NOT NULL, -- Clustered key
    TaskId          INT NOT NULL IDENTITY(100000,1) PRIMARY KEY,
    Title           NVARCHAR(128) NOT NULL,
    Preview         NVARCHAR(512)
)

-- Metadata (creation options)
CREATE TABLE TaskMetadata (
    FolderId        INT NOT NULL, -- Clustered key
    TaskId          INT NOT NULL,

    CreatedDate     DATETIME NOT NULL,
    CreatedBy       VARCHAR(64),
    StartDate       DATETIME,
    EndDate         DATETIME        
)

-- Detailed information
CREATE TABLE TaskData (
    TaskId          INT NOT NULL, 
    Data            NVARCHAR(max)
)

-- Tag: Metric
CREATE TABLE MetricTag (
    TaskId          INT NOT NULL,
    metricId        VARCHAR(36) NOT NULL  
)

-- Tag: Technology
CREATE TABLE TechnologyTag (
    TaskId          INT NOT NULL,
    technologyId    VARCHAR(36) NOT NULL  
)

CREATE TABLE Metric (
    WorkspaceId     INT NOT NULL,
    metricId        VARCHAR(36) NOT NULL,
    description     VARCHAR(128) NOT NULL
)

CREATE TABLE Technology (
    WorkspaceId     INT NOT NULL,
    technologyId    VARCHAR(36) NOT NULL,
    description     VARCHAR(128) NOT NULL
)

-- Tag: Old Kanban information
CREATE TABLE LegacyKanbanTag (
    TaskId          INT NOT NULL,
    ActivityId      VARCHAR(36) NOT NULL,
    ComplexityId    VARCHAR(36) NOT NULL,  
    ExpertiseId     VARCHAR(36) NOT NULL  
)

CREATE TABLE Activity (
    WorkspaceId     INT NOT NULL,
    ActivityId      VARCHAR(36) NOT NULL,
    Description     VARCHAR(128) NOT NULL
)

CREATE TABLE Complexity (
    WorkspaceId     INT NOT NULL,
    ComplexityId    VARCHAR(36) NOT NULL,
    Description     VARCHAR(128) NOT NULL
)

CREATE TABLE Expertise (
    WorkspaceId     INT NOT NULL,
    ExpertiseId     VARCHAR(36) NOT NULL,
    Description     VARCHAR(128) NOT NULL
)
