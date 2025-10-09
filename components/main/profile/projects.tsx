import React from 'react';
import { Lock, Globe, MoreHorizontal } from 'lucide-react';

// TypeScript interfaces
interface Project {
  id: number;
  imageSrc: string | null;
  isPrivate: boolean;
  projectName: string;
  collaborators: number;
  createdDate: string;
}

interface ProjectCardProps {
  imageSrc: string | null;
  isPrivate: boolean;
  projectName: string;
  collaborators: number;
  createdDate: string;
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface ProjectDashboardProps {
  projects?: Project[];
  invited?: Project[];
  peerConfirmation?: Project[];
}

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  isPrivate,
  projectName,
  collaborators,
  createdDate
}) => {
  return (
    <div className="bg-white h-40 flex rounded-sm shadow-sm border border-[#f1f1f1] overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="w-4/10 h-full bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={projectName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-sm">Project Image</div>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="py-6 pt-2 px-4 w-6/10">
        <div className="flex items-start justify-between mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900">{projectName}</h3>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600 text-sm">{collaborators} Collaborators</p>
          <p className="text-gray-400 text-sm">Created {createdDate}</p>

          <div className="flex items-center gap-2 pt-2">
            {isPrivate ? (
              <>
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">Private</span>
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">Public</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// TabButton Component
const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-sm font-medium transition-colors ${active
        ? 'bg-[#D8D8D8] text-[#202224]'
        : 'bg-[#F8F9FA] text-[#202224] hover:bg-gray-100'
        }`}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        {children}
      </span>
    </button>
  );
};

// Main Dashboard Component
const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ projects = [] }) => {
  const [activeTab, setActiveTab] = React.useState<string>('my-projects');

  return (
    <div className="tab-pane fade container mx-auto" id="heatmap" role="tabpanel">
      <div className=" bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <TabButton
                    active={activeTab === 'my-projects'}
                    onClick={() => setActiveTab('my-projects')}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><circle cx={17} cy={7} r={3}></circle><circle cx={7} cy={17} r={3}></circle><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></g></svg>}
                  >
                    My Projects
                  </TabButton>

                  <TabButton
                    active={activeTab === 'invited'}
                    onClick={() => setActiveTab('invited')}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6m-3-3v6"></path></svg>}
                  >
                    Invited Projects
                  </TabButton>

                  <TabButton
                    active={activeTab === 'peer-confirmation'}
                    onClick={() => setActiveTab('peer-confirmation')}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 13.5l-1.778-1.778M3.903 5.816q-.35.027-.708.028c-.474 0-.939-.043-1.392-.094A1.326 1.326 0 0 1 .638 4.582C.59 4.132.55 3.67.55 3.198c0-.47.041-.933.09-1.383c.064-.61.555-1.1 1.164-1.168c.453-.05.918-.094 1.392-.094s.939.043 1.391.094c.61.068 1.1.558 1.165 1.168c.049.45.09.912.09 1.383q-.001.336-.025.666M3.195 8.155c-.474 0-.939.044-1.392.094c-.61.068-1.1.559-1.165 1.168c-.048.45-.089.913-.089 1.384s.041.933.09 1.384c.064.61.555 1.1 1.164 1.168c.453.05.918.094 1.392.094s.939-.044 1.391-.094M7.931 3.198c0-.471.04-.933.089-1.383c.065-.61.556-1.1 1.165-1.168c.453-.05.918-.094 1.392-.094s.938.043 1.391.094c.61.068 1.1.558 1.165 1.168c.048.45.09.912.09 1.383c0 .472-.042.934-.09 1.384a1.3 1.3 0 0 1-.11.4m-4.199 7.711c2.479 0 3.873-1.394 3.873-3.873s-1.394-3.873-3.873-3.873S4.951 6.34 4.951 8.82s1.394 3.873 3.873 3.873" strokeWidth={1}></path></svg>}
                  >
                    Peer Confirmation
                  </TabButton>
                </div>

                <button className="bg-[#157BFF] hover:bg-blue-700 text-white px-4 py-1.5 rounded-sm transition-colors flex items-center gap-2">
                  <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"></path></svg></span>
                  Create Project
                </button>
              </div>
              {activeTab === "my-projects" &&
                (<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      imageSrc={project.imageSrc}
                      isPrivate={project.isPrivate}
                      projectName={project.projectName}
                      collaborators={project.collaborators}
                      createdDate={project.createdDate}
                    />
                  ))}
                </div>
                )}
              {activeTab === "invited" &&
                (<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((invited) => (
                    <ProjectCard
                      key={invited.id}
                      imageSrc={invited.imageSrc}
                      isPrivate={invited.isPrivate}
                      projectName={invited.projectName}
                      collaborators={invited.collaborators}
                      createdDate={invited.createdDate}
                    />
                  ))}
                </div>
                )}
              {activeTab === "peer-confirmation" &&
                (<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((peerConfirmation) => (
                    <ProjectCard
                      key={peerConfirmation.id}
                      imageSrc={peerConfirmation.imageSrc}
                      isPrivate={peerConfirmation.isPrivate}
                      projectName={peerConfirmation.projectName}
                      collaborators={peerConfirmation.collaborators}
                      createdDate={peerConfirmation.createdDate}
                    />
                  ))}
                </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;