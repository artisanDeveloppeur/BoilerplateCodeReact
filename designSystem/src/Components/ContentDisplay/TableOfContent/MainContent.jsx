const DummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit volutpat risus, id convallis nibh gravida at. Integer tempus lectus nibh, ac condimentum nibh fringilla vitae. Etiam sit amet venenatis magna. Curabitur nisl velit, ornare sit amet dui vel, vulputate iaculis ex. Nullam a mi condimentum, suscipit lacus et, sodales sapien. "
export function MainContent() {

  return (
    <div className='content'>
      <h1>Table of Content with Item highlight in React</h1>
      <p>{DummyText}</p>
      <h2 id="initial-header">Setting up React</h2>
      <p>{DummyText}</p>
      <h2 id="second-header">Create a table of content</h2>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="third-header">Create a TOC component</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="fourth-header">Find the headings on the page</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="fifth-header">Listing all found heading</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="sixth-header">Linking heading to there respective sections</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="find-highlight">Find and highlight the currently active heading</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h2 id='conclusion'>Conclusion</h2>
      <p>{DummyText}</p>
    </div>
  )
}