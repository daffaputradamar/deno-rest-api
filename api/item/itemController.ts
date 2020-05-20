import { items, setItems } from "./items.ts";
import { Item } from "../../config/types.ts";
import { createId } from "../../lib/createId.ts";

// @desc    Get all items
// @route   GET /api/api/items
const getItems = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: items,
  };
};

// @desc    Get an item
// @route   GET /api/api/items/:id
const getItem = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const item: Item | undefined = items.find((i) => i.id === params.id);
  if (item) {
    response.status = 200;
    response.body = {
      success: true,
      data: item,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "No item found",
    };
  }
};

// @desc    Add an Item
// @route   POST /api/api/items
const addItem = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      message: "No data",
    };
  } else {
    const item: Item = body.value;
    item.id = createId();
    items.push(item);
    response.status = 201;
    response.body = {
      success: true,
      data: item,
    };
  }
};

// @desc    Update an item
// @route   PUT /api/api/items/:id
const updateItem = async (
  { request, params, response }: {
    request: any;
    params: { id: string };
    response: any;
  },
) => {
  const item: Item | undefined = items.find((i) => i.id === params.id);
  if (item) {
    const body = await request.body();
    const updateData: { name?: string; description?: string; price?: number } =
      body.value;

    const newItems = items.map((i) =>
      i.id === params.id ? { ...i, ...updateData } : i
    );
    setItems(newItems);

    response.status = 200;
    response.body = {
      success: true,
      data: items,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "No item found",
    };
  }
};

// @desc    Delete an item
// @route   DELETE /api/api/items/:id
const deleteItem = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const item: Item | undefined = items.find((i) => i.id === params.id);
  if (item) {
    const newItems = items.filter((i) => i.id !== params.id);
    setItems(newItems);
    response.body = {
      success: false,
      message: "Item removed",
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "No item found",
    };
  }
};

export {
  getItems,
  getItem,
  addItem,
  updateItem,
  deleteItem,
};
