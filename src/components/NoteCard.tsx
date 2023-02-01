import { Badge, Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Tag } from '../App';
import styles from './NoteCard.module.css';

type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

export default function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          {tags.map((tag) => (
            <Badge className="text-truncate" key={tag.id}>
              {tag.label}
            </Badge>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
