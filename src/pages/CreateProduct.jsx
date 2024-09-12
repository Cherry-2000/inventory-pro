import {
  Accordion,
  Button,
  Checkbox,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea
} from 'flowbite-react';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import { GiMagickTrick } from 'react-icons/gi';
import { MdAddTask } from 'react-icons/md';

const CreateProduct = () => {
  return (
    <div className="ml-8 mr-2">
      <div className="flex gap-3 pt-5 text-3xl font-semibold  text-gray-800 dark:text-gray-100">
        <BsDatabaseFillAdd className="h-9" />
        Create Product
      </div>
      <hr className="h-px mt-6 mb-8 bg-gray-800 border-0 dark:bg-gray-100" />
      <div className="px-24 bg-white dark:bg-gray-800 rounded-lg shadow  grid grid-cols-11 gap-4 pb-8 pt-4">
        <div className="justify-center col-span-5">
          <div className="max-w-md placeholder-blue-50">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="Product Name" value="Product Name" />
            </div>
            <TextInput id="productName" type="text" required color="info" />
          </div>

          <div className="max-w-md">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="Variant" value="Variant (color,taste,etc...)" />
            </div>
            <TextInput id="productName" type="text" />
          </div>

          <div className="max-w-md">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="Category" value="Category" />
            </div>
            <Select id="category" required color="info">
              <option className="text-black dark:text-black">None</option>
              <option className="text-black dark:text-black">Code 39</option>
              <option className="text-black dark:text-black">EAN8</option>
              <option className="text-black dark:text-black">EAN13</option>
              <option className="text-black dark:text-black">UPC</option>
            </Select>
          </div>

          {/*Product Code*/}
          <div className="max-w-md grid grid-cols-5">
            <div className="mb-2 mt-6 block col-span-5">
              <Label htmlFor="productCode" value="Product Code" />
            </div>
            <TextInput
              className=" col-span-4"
              id="productCode"
              type="number"
              color="info"
              required
            />
            <Button className="ml-2 pr-2 h-10 items-center col-span-1">
              <GiMagickTrick className="text-3xl" />
            </Button>
          </div>
        </div>

        <div></div>

        {/*Second Column*/}
        <div className="justify-center justify-self-center  col-span-5">
          <div className="grid grid-cols-12 gap-4 max-w-md">
            <div className="max-w-md col-span-8">
              <div className="mb-2 mt-6 block">
                <Label htmlFor="buyingPrice" value="Buying Price" />
              </div>
              <TextInput id="buyingPrice" type="number" color="info" required />
            </div>
            <div className="max-w-md  col-span-1 font-bold text-2xl pt-14 pl-0.5 dark:text-white text-gray-900">
              +
            </div>
            <div className="max-w-md  col-span-3">
              <div className="mb-2 mt-6 block">
                <Label htmlFor="tax" value="Tax" />
              </div>
              <TextInput id="tax" type="number" value="0" rightIcon={AiOutlinePercentage} />
            </div>
          </div>
          <div className="max-w-md">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="sellingPrice" value="Selling Price" />
            </div>
            <TextInput id="sellingPrice" type="number" color="info" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="productUnitLVL0" value="Product Unit" />
            </div>
            <Select id="productUnitLVL0" color="info" required>
              <option className="text-black dark:text-black">Pcs</option>
              <option className="text-black dark:text-black">Test</option>
              <option className="text-black dark:text-black">Test</option>
            </Select>
          </div>

          {/*Expire In Days*/}
          <div className="max-w-md">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="ExpireInDays" value="Expire in Days" />
            </div>
            <TextInput className=" col-span-4" id="productCode" type="number" />
          </div>

          <div className="max-w-md">
            <div className="mb-2 mt-6 block">
              <Label htmlFor="stockAlert" value="Stock Alert" />
            </div>
            <TextInput
              id="stockAlert"
              type="number"
              placeholder="Enter Stock Alert"
              value="0"
              required
            />
          </div>
        </div>

        <hr className="h-px mt-6 mb-3 bg-gray-800 border-0 dark:bg-gray-100 col-span-11" />

        <div className="max-w-md col-span-5">
          <div className="mb-4 block">
            <Label
              htmlFor="productCode"
              value="Description"
              className="text-gray-950 dark:text-white font-bold text-lg mb-6"
            />
          </div>
          <Textarea id="comment" placeholder="Enter Product Description" rows={6} />
        </div>
        <div className="max-w-md col-span-1"></div>
        <div className="col-span-5 mb-4 mx-5">
          <div className="text-gray-950 dark:text-white font-bold text-lg mb-4">
            Add Product Photo
          </div>
          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor="dropzone-file"
              className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <FileInput id="dropzone-file" className="hidden" />
            </Label>
          </div>
        </div>
      </div>

      <div className="items-top mt-4 px-24 bg-gray-100 dark:bg-gray-900 rounded-lg shadow pt-4 pb-4">
        <div className="col-span-5">
          <div className="text-gray-950 dark:text-white font-bold text-lg my-4">
            Edit Unit Levels
          </div>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>Unit Level 1</Accordion.Title>
              <Accordion.Content>
                <div className="grid grid-cols-11 gap-4">
                  <div className="justify-center col-span-5">
                    <div className="max-w-md">
                      <div className="mb-2 mt-6 block">
                        <Label htmlFor="itemPerPacking" value="Items Count Per Packing" />
                      </div>
                      <TextInput
                        id="sellingPrice"
                        type="number"
                        placeholder="Enter Number of Items per Packing"
                      />
                    </div>

                    <div className="max-w-md">
                      <div className="mb-2 mt-6 block">
                        <Label htmlFor="productUnitPerItem" value="Product Unit Per Item" />
                      </div>
                      <Select id="productUnitPerItem">
                        <option>Pcs</option>
                        <option>Test</option>
                        <option>Test</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll className="mt-1">
            <Accordion.Panel>
              <Accordion.Title>Unit Level 2</Accordion.Title>
              <Accordion.Content>
                <div className="grid grid-cols-11 gap-4">
                  <div className="justify-center col-span-5">
                    <div className="max-w-md">
                      <div className="mb-2 mt-1 block">
                        <Label htmlFor="itemPerPacking" value="Items Count Per Packing" />
                      </div>
                      <TextInput
                        id="sellingPrice"
                        type="number"
                        placeholder="Items per Packing"
                        color="info"
                      />
                    </div>

                    <div className="max-w-md">
                      <div className="mb-2 mt-5 block">
                        <Label htmlFor="productUnitPerItem" value="Product Unit Per Item" />
                      </div>
                      <Select id="productUnitPerItem" color="info">
                        <option className="text-black dark:text-black">Pcs</option>
                        <option className="text-black dark:text-black">Test</option>
                        <option className="text-black dark:text-black">Test</option>
                      </Select>
                    </div>

                    <div className="max-w-md">
                      <div className="mb-2 mt-5 block">
                        <Label htmlFor="itemPerPacking" value="Selling Price per Item" />
                      </div>
                      <TextInput
                        id="sellingPrice"
                        type="number"
                        placeholder="Enter Selling Price per Item"
                        color="info"
                      />
                    </div>

                    <div className="max-w-md grid grid-cols-5">
                      <div className="mb-2 mt-5 block col-span-5">
                        <Label htmlFor="productCodeLvl1" value="Product Code" />
                      </div>
                      <TextInput
                        className=" col-span-4"
                        id="productCodeLvl1"
                        type="text"
                        placeholder="Enter Product Code"
                        color="info"
                        required
                      />
                      <Button className="ml-2 pr-2 h-10 items-center col-span-1">
                        <GiMagickTrick className="text-3xl" />
                      </Button>
                    </div>
                  </div>

                  <div className="justify-center col-span-1"></div>

                  <div className="justify-center col-span-5">
                    <div className="col-span-5 mb-4 mr-5">
                      <div className="text-gray-950 dark:text-white font-bold text-lg mb-4">
                        Add Product Photo
                      </div>
                      <div className="flex w-full items-center justify-center">
                        <Label
                          htmlFor="dropzone-file"
                          className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Click to upload</span> or drag and
                              drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <FileInput id="dropzone-file" className="hidden" />
                        </Label>
                      </div>
                    </div>

                    {/*Description*/}
                    <div className="max-w-md col-span-5">
                      <div className="mb-4 block">
                        <Label
                          htmlFor="productCode"
                          value="Description"
                          className="text-gray-950 dark:text-white font-bold text-lg mb-6"
                        />
                      </div>
                      <Textarea id="comment" placeholder="Enter Product Description" rows={6} />
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll className="mt-1">
            <Accordion.Panel>
              <Accordion.Title>Unit Level 3</Accordion.Title>
              <Accordion.Content>
                <div className="grid grid-cols-11 gap-4">
                  <div className="justify-center col-span-5">
                    <div className="max-w-md">
                      <div className="mb-2 mt-6 block">
                        <Label htmlFor="itemPerPacking" value="Items Count Per Packing" />
                      </div>
                      <TextInput
                        id="sellingPrice"
                        type="number"
                        placeholder="Enter Selling Price"
                      />
                    </div>

                    <div className="max-w-md">
                      <div className="mb-2 mt-6 block">
                        <Label htmlFor="productUnitPerItem" value="Product Unit Per Item" />
                      </div>
                      <Select id="productUnitPerItem">
                        <option>Pcs</option>
                        <option>Test</option>
                        <option>Test</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="px-24 bg-white dark:bg-gray-800 rounded-lg shadow mt-4 pb-12 pt-4">
        <div className="flex m-5 items-center gap-2">
          <Checkbox id="accept" />
          <Label htmlFor="accept" className="flex">
            Product has IMEI/Serial Number.
          </Label>
        </div>
        <div className="flex m-5 items-center gap-2">
          <Checkbox id="accept" />
          <Label htmlFor="accept" className="flex">
            Product is not for sell.
          </Label>
        </div>

        <Button size="xl" gradientDuoTone="tealToLime" className="m-5">
          <div className="text-xl flex flex-wrap gap-2">
            <MdAddTask className="h-8 w-10" />
            Create Product
          </div>
        </Button>
      </div>
    </div>
  )
}

export default CreateProduct
