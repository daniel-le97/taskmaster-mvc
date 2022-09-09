export class Task{

  constructor(data){
  

  }

  get Template(){
    return `

    <div class="col-md-3 my-3 mx-md-5">
            <div class="card">
              <div class="card-header bg-primary text-light fs-4 fw-bold d-flex justify-content-between">
                <span>Placeholder task name</span>
                <i class="mdi mdi-delete-forever"></i>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckboxStretched"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="firstCheckboxStretched"
                    >First checkbox</label
                  >
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckboxStretched"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="secondCheckboxStretched"
                    >Second checkbox</label
                  >
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckboxStretched"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="thirdCheckboxStretched"
                    >Third checkbox</label
                  >
                </li>
              </ul>

              <div class="bg-primary">
                <form class="m-2 d-flex justify-content-center gap-3">
                  <input type="text" name="" id="" class="rounded" />
                  <button class="btn btn-warning" type="submit">
                    add task
                  </button>
                </form>
              </div>
            </div>
          </div>
    
    
    
    `;
  }
}