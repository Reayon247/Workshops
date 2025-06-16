export default async function postPage({ params }) {
  const page = await params;
  return (
    <>
      <h1>
        IM THE post id = {page.id} and comment = {page.commentid}
      </h1>
    </>
  );
}
