import { getAllProjects, getProjectBySlug as getProjectBySlugService } from "../services/projects.service.js";

export async function getProjects(req, res) {
  try {
    const projects = await getAllProjects();
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getProjectBySlug(req, res) {
  try {
    const { slug } = req.params;
    const project = await getProjectBySlugService(slug);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error("Error fetching project:", error.message);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}