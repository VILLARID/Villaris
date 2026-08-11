import { pool } from "../config/database.js";

const PROJECT_SELECT = `
  SELECT
    p.id,
    p.title,
    p.slug,
    p.short_description,
    p.description,
    p.category,
    p.status,
    p.year,
    p.image_url,
    p.project_url,
    p.github_url,
    p.featured,
    p.created_at,
    p.updated_at,
    COALESCE(
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', t.id,
          'name', t.name,
          'slug', t.slug,
          'icon_url', t.icon_url
        )
        ORDER BY t.name
      ) FILTER (WHERE t.id IS NOT NULL),
      '[]'
    ) AS technologies
  FROM projects p
  LEFT JOIN project_technologies pt
    ON pt.project_id = p.id
  LEFT JOIN technologies t
    ON t.id = pt.technology_id
`;

export async function getAllProjects() {
  const { rows } = await pool.query(`
    ${PROJECT_SELECT}
    GROUP BY p.id
    ORDER BY p.featured DESC, p.year DESC, p.created_at DESC
  `);

  return rows;
}

export async function getProjectBySlug(slug) {
  const { rows } = await pool.query(`
    ${PROJECT_SELECT}
    WHERE p.slug = $1
    GROUP BY p.id
  `, [slug]);

  return rows[0] ?? null;
}